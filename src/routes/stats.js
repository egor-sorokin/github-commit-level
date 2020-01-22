import { Router } from 'express';
import axios from 'axios';

import { GITHUB_REST_API_PATH } from '../common/constants';
import { STRINGS_MESSAGES } from '../common/strings';
import { getUserLevels } from '../common/app-utils';


const router = Router();
// To get unlimited amount of request you need to register this app.
// Follow steps here: https://developer.github.com/v3/#oauth2-keysecret
const oauth = '';

router.get('/', (req, res) => {
    const userName = req.query.userName || null;

    if (!userName) {
        res.status(400).send({
            message: STRINGS_MESSAGES.NO_USERNAME
        });
    }

    axios.get(GITHUB_REST_API_PATH + `/users/${userName}/repos${oauth}`)
        .then((resp) =>
            Promise.all(resp.data.map((repo) =>
                axios.get(GITHUB_REST_API_PATH + `/repos/${userName}/${repo.name}/commits${oauth}`)
                    .then((resp) => resp.data.length)
                    .catch((err) => err)
            ))
        )
        .then((allCommits) => {
            const commits = allCommits.reduce((acc, commit) => acc + commit, 0);
            const { currentLevel, nextLevel } = getUserLevels(commits);

            res.status(200).send({
                userName,
                commits,
                currentLevel,
                nextLevel
            });
        })
        .catch(err => {
            res.status(err.response.status).send({ message: err.response.statusText });
        });
});

export default router;
