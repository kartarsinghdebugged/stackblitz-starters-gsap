import React, { useState } from 'react';
import { FiPaperclip } from "react-icons/fi";
import Select from 'react-select'

const FormFields = (props) => {
  const customStyles = {
    control: (provided, state) => ({
      // Styles for the control container
      ...provided,
      color: 'red',
      border: 'none',
      borderRadius: '0px',
      backgroundColor: 'transparent',
      borderBottom: '1px solid #2D2D2D',
      padding: '20px 6px',
      fontSize: '18px',
      fontWeight: '400',
      lineHeight: '28px',
      boxShadow: state.isFocused ? '0' : 'none',
      '&:hover': {
        borderColor: '#2D2D2D',
        color: '#fff',
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#fff', 
      borderRadius: '0', 
      boxShadow: '0', 
      padding: '0px, 10px, 0px, 10px',
      top: '100px',
      borderBottom: '1px solid #2D2D2D',
   
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none', // Remove the indicatorSeparator
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: '0', // Remove the default border
    }),
    singleValue: (provided) => ({
      ...provided,
      color: selectedHeading.value ? '#2D2D2D' : '#919191', // Set the text color for the default selected value
    }),
    option: (provided) => ({
      // Styles for each option
      ...provided,
      backgroundColor: 'transparent',
      border: 'none',
      color:'#2D2D2D',
      fontSize: '18px',
      fontWeight: '400',
      lineHeight: '28px',
      padding: '20px',
    
      '&:hover': {
        backgroundColor: '#2D2D2D',
        color: '#fff',
        border:'none',
      },
    }),
    border:'none',
  };
  const { 
    id, 
    type, 
    placeholder, 
    label, 
    options, 
    name, 
    value, 
    handleChange, 
    pattern,
    errorMessage, 
    required,
    onSelectAttachment,
    classes,
    Labelclasses,
    setSelectedHeading,
    selectedHeading  
  } = props;

  const [focused, setFocused] = useState(false);
  
  const handleFocus = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'name':
        const nameRegex = /^[a-zA-Z]{3,16}$/;
        const isNameValid = nameRegex.test(value)
        setFocused(!isNameValid)
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(value)
        setFocused(!isEmailValid)
        break;
      default:
        break;
    }
  };


  const handleSelect = (selectedOption) => {
    setSelectedHeading(selectedOption)
    const selectedData = {
      target : {
        name: 'heading',
        value: selectedOption.value
      }
    }
    handleChange(selectedData)
  }

  switch (type) {
    case 'select':
      return (
        <>
          {/* <label className={Labelclasses} htmlFor='heading-options'>{label}</label>
          <select name={name} id="heading-options" onChange={(e) => handleChange(e)}>
            {options.map((item) => (
              <option key={item.id} value={item.value}>{item.value}</option>
            ))}
          </select> */}
          <Select 
           styles={customStyles}
            options={options} 
            value={selectedHeading}
            // onChange={handleSelect}
            onChange={(selectedOption) => setSelectedHeading(selectedOption)}
            defaultValue={{ value: '', label: 'Where you heading ?' }}
            
          />
        </>
      )
    case 'textarea':
      return (
        <>
          <div>
            <label className={Labelclasses} htmlFor='contact-us-message'>{label}</label>
            <textarea id="contact-us-message" placeholder='Start typing here...' name={name} rows="4" cols="50" value={value} onChange={(e) => handleChange(e)} ></textarea>
          </div>
        </>
      )
    case 'file':
      return (
        <>
          <div>
            <label className={Labelclasses}>{label}</label>
            <input type={type} placeholder={placeholder} name={name} onChange={onSelectAttachment}/>
          </div>
         
          {/* <div className='file' >
            <label for='input-file' >
            <FiPaperclip />{label}
      
          </label>
          <input id='input-file' type={type} placeholder={placeholder} name={name} onChange={onSelectAttachment} />
        </div> */}
        </>
      )
    default:
      return (
        <>
          <div className={classes} key={id}>
            <label className={Labelclasses}>{label}</label>
            <input
              type={type}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={(e) => handleChange(e)}
              onBlur={handleFocus}
              focused={focused.toString()}
              pattern={pattern}
              required={required}
            />
            {focused ? <span className='error-msg'>{errorMessage}</span> : null}
          </div>
        </>
      )
  }
}

export default FormFields;