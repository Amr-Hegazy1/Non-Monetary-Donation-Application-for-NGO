import React, { useCallback, useState } from 'react'
import { ReactTags } from 'react-tag-autocomplete'
import "../styles/TagsSelector.css";
import { Select } from 'antd'



export default function TagsSelector({suggestions, tagLabel}) {

  

  
  const suggestionsAnnotation = suggestions.map((suggestion, index) => ({ value: index, label: suggestion }))
  const [selected, setSelected] = useState([])

  

  
  return (
    <>
      <p>Select the {tagLabel} you want to teach:</p>
      <Select
        mode="tags"
        style={{
          width: '100%',
        }}
        placeholder={"Select " + tagLabel}
        onChange={() => {}}
        options={suggestionsAnnotation}
      />
      
    </>
  )
}