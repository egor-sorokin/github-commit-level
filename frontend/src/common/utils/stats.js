export const mapStatsDataForUI = (statsResponse) => ({
    id: statsResponse.id,
    userName: statsResponse.userName,
    commits: statsResponse.commits,
    currentLevel: statsResponse.currentLevel,
    nextLevel: statsResponse.nextLevel,
    text: statsResponse.text
});
