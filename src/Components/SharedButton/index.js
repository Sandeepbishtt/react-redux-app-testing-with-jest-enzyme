import React from 'react'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types';

const SharedButton = ({clickHandler}) => {
   
    
    return (
        <Button variant='contained' onClick={clickHandler} color='primary' type='button' style={{margin:'2rem'}} data-test='btn'>
            Get Post
        </Button>
    )
}
SharedButton.propTypes = {
    buttonText: PropTypes.string,
    clickHandler: PropTypes.func
};

export default SharedButton