import { COMMIT_LEVELS } from './constants';


export const getUserLevels = (commits) => {
    const levelsLength = COMMIT_LEVELS.length;
    let currentLevel = null;
    let idx = 0;

    while (idx < levelsLength) {
        if (COMMIT_LEVELS[idx].commits <= commits) {
            idx++;
        } else {
            currentLevel = COMMIT_LEVELS[idx - 1];
            break;
        }
    }

    return {
        currentLevel: currentLevel ? currentLevel : COMMIT_LEVELS[levelsLength - 1],
        nextLevel: idx >= levelsLength ? null : COMMIT_LEVELS[idx]
    };
};

