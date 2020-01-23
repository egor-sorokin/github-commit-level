import { useEffect, useMemo, useState } from 'react';

import {
    STATUS_ERROR,
    STATUS_INITIALIZING,
    STATUS_LOADING_GREETINGS,
    STATUS_READY,
    URL_PATH_STATS
} from '../../common/services/constants';
import { getStats } from '../../common/services/api';
import { STRINGS_MESSAGES } from '../../common/services/strings';
import { mapStatsDataForUI } from '../../common/utils/stats';


function useStats() {
    const [status, setStatus] = useState(STATUS_INITIALIZING);
    const [error, setError] = useState(null);

    const [allStats, setAllStats] = useState(null);
    const [userName, setUserName] = useState('');
    const [isStatsLoading, setIsStatsLoading] = useState(false);
    const [fieldsError, setFieldsError] = useState({});

    const isLoading = [
        STATUS_INITIALIZING,
        STATUS_LOADING_GREETINGS
    ].includes(status);


    useEffect(() => {
        init().catch((err) => {
            console.error('err', err);
            setStatus(STATUS_ERROR);
            setError({ message: STRINGS_MESSAGES.LOAD_ERROR });
        });
    }, []);


    const stats = useMemo(() => {
        let updatedStats = null;

        if (allStats) {
            updatedStats = mapStatsDataForUI(allStats);
        }

        return updatedStats;
    }, [allStats]);


    const init = async() => {
        setStatus(STATUS_INITIALIZING);
        // for the init event
        setStatus(STATUS_READY);
    };

    const onUserNameChange = (newUserName) => {
        setUserName(newUserName);
    };

    const onCheckStats = async() => {
        setIsStatsLoading(true);
        setFieldsError({});

        try {
            const statsData = await getStats(URL_PATH_STATS, userName);
            setUserName('');
            setAllStats(statsData.data);
        } catch (err) {
            console.error('err:', err);
            setFieldsError({ check: err });
        } finally {
            setIsStatsLoading(false);
        }
    };


    return {
        isLoading,
        error,

        stats,
        userName,
        fieldsError,
        isStatsLoading,

        onUserNameChange,
        onCheckStats
    };
}

export default useStats;
