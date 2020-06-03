import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'reactstrap';

const TextareaPage = () => {
    return (
        <Input
          type="textarea"
          label="Icon Prefix"
          rows="2"
          icon="pencil-alt"
          size="sm"
        />
    )
}

export default TextareaPage;