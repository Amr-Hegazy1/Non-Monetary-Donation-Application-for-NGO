import React, { useCallback, useState } from 'react'
import { ReactTags } from 'react-tag-autocomplete'
import "../styles/TagsSelector.css";


export default function TagsSelector({suggestions, tagLabel}) {

  
  const suggestionsAnnotation = suggestions.map((suggestion, index) => ({ value: index, label: suggestion }))
  const [selected, setSelected] = useState([])

  const [options, setOptions] = useState({
    activateFirstOption: false,
    allowBackspace: false,
    collapseOnSelect: false,
    isDisabled: false,
    isInvalid: false,
  })

  const onAdd = useCallback(
    (newTag) => {
      setSelected([...selected, newTag])
    },
    [selected]
  )

  const onDelete = useCallback(
    (index) => {
      setSelected(selected.filter((_, i) => i !== index))
    },
    [selected]
  )

  const onOptionChange = useCallback(
    (e) => {
      setOptions({ ...options, [e.target.name]: e.target.checked })
    },
    [options]
  )

  return (
    <>
      <p>Select the {tagLabel} you want to teach:</p>
      <ReactTags
        id="country-selector"
        labelText="Select subjects"
        onAdd={onAdd}
        onDelete={onDelete}
        onExpand={() => setTimeout(function(){debugger;},5000)}
        selected={selected}
        suggestions={suggestionsAnnotation}
        
        {...options}
      />
      
    </>
  )
}