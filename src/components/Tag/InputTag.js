import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import './InputTag.scss';


export default function InputTag({ tags, handleDelete, handleAddition, handleDrag, handleTagClick }) {

  return (
    <div id="inputTag">
      <ReactTags
        tags={tags}
        //   suggestions={suggestions}
        //   delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        handleTagClick={handleTagClick}
        inputFieldPosition="bottom"
        autocomplete
      />
    </div>
  )
}
