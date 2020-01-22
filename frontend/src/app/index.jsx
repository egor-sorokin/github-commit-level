import * as React from 'react';
import SectionMessage from '@atlaskit/section-message';

import useStats from './hooks/stats';
import { CenteredSpinner } from '../common/components/loader/Loader';
import { CenteredSpinnerContainer } from '../common/components/loader/styled';
import { PageContainer, SearchContainer } from './styled';
import { STRINGS_PAGE } from '../common/services/strings';
import Stats from './components/Stats';
import { StatsContainer } from './components/styled';
import Search from './components/Search';


const Page = () => {
    const {
        isLoading,
        error,

        stats,
        userName,
        isStatsLoading,

        onUserNameChange,
        onCheckStats
    } = useStats();

    return (
        <PageContainer>
            {isLoading && (
                <CenteredSpinnerContainer>
                    <CenteredSpinner/>
                </CenteredSpinnerContainer>
            )}
            {error && (
                <SectionMessage appearance="error">{error.message}</SectionMessage>
            )}
            {!isLoading && !error && (
                <main>
                    <h3>{STRINGS_PAGE.TITLE}</h3>
                    <SearchContainer>
                        <Search
                            userName={userName}
                            onUserNameChange={onUserNameChange}
                            onCheckStats={onCheckStats}
                        />
                    </SearchContainer>
                    {
                        !isStatsLoading && stats && (
                            <StatsContainer>
                                <Stats stats={stats}/>
                            </StatsContainer>
                        )
                    }
                    {
                        isStatsLoading && !stats && (
                            <StatsContainer>
                                <CenteredSpinnerContainer>
                                    <CenteredSpinner/>
                                </CenteredSpinnerContainer>
                            </StatsContainer>
                        )
                    }
                </main>
            )}
        </PageContainer>
    );
};

export default Page;
