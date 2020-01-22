import * as React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import { CurrentLevelImage, FigureContainer } from './styled';


const Stats = ({ stats }) => (
    stats && (
        <section>
            <FigureContainer>
                <CurrentLevelImage
                    src={get(stats, 'currentLevel.image', '')}
                    alt="Alt description goes here"
                />
            </FigureContainer>
            <h2>
                Congratulations! You are &quot;{get(stats, 'currentLevel.level', '-')}&quot;.
            </h2>
            <p>
                <b>Username: </b>
                {stats.userName}
            </p>
            <p>
                <b>Total commits: </b>
                {stats.commits}
            </p>
            <p>
                <b>Commits for the next level: </b>
                {get(stats, 'nextLevel.commits') ? get(stats, 'nextLevel.commits') - stats.commits : 0}
            </p>
            <p>
                <b>Description: </b>
                {get(stats, 'currentLevel.text', '-')}
            </p>
        </section>
    )
);

Stats.propTypes = {
    stats: PropTypes.shape({
        id: PropTypes.number,
        userName: PropTypes.string,
        commits: PropTypes.number,
        currentLevel: PropTypes.shape({
            image: PropTypes.string,
            text: PropTypes.string,
            commits: PropTypes.number,
            level: PropTypes.string
        }),
        nextLevel: PropTypes.shape({
            image: PropTypes.string,
            text: PropTypes.string,
            commits: PropTypes.number,
            level: PropTypes.string
        }),
        text: PropTypes.string
    }).isRequired
};


export default Stats;
