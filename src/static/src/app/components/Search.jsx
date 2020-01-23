import * as React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';
import EditorCloseIcon from '@atlaskit/icon/glyph/editor/close';

import { STRINGS_BUTTONS, STRINGS_FIELDS } from '../../common/services/strings';
import { ResetFieldIconContainer } from '../../common/components/loader/styled';


const Search = ({ userName, onUserNameChange, onCheckStats }) => (
    <React.Fragment>
        <Textfield
            value={userName}
            onChange={(e) => {
                onUserNameChange(get(e, 'target.value'));
            }}
            width="large"
            placeholder={STRINGS_FIELDS.USERNAME_PLACEHOLDER}
            isCompact
            elemAfterInput={
                (
                    <ResetFieldIconContainer
                        userName={userName}
                        onClick={() => onUserNameChange('')}
                    >
                        <EditorCloseIcon label="close"/>
                    </ResetFieldIconContainer>
                )
            }
        />
        <Button
            appearance="primary"
            onClick={() => onCheckStats()}
            isDisabled={!userName.length}
        >
            {STRINGS_BUTTONS.CHECK}
        </Button>
    </React.Fragment>
);

Search.propTypes = {
    userName: PropTypes.string,
    onUserNameChange: PropTypes.func,
    onCheckStats: PropTypes.func
};

Search.defaultProps = {
    userName: '',
    onUserNameChange: () => {
    },
    onCheckStats: () => {
    }
};

export default Search;
