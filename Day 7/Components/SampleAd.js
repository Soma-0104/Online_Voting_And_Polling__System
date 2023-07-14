import React, { useState } from 'react';

const AdminPage = () => {
  const [ballotType, setBallotType] = useState('multipleChoice');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [ratingScale, setRatingScale] = useState(5);
  const [ballotPreview, setBallotPreview] = useState('');

  const handleBallotTypeChange = (event) => {
    setBallotType(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleOptionChange = (index, event) => {
    const updatedOptions = [...options];
    updatedOptions[index] = event.target.value;
    setOptions(updatedOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  const handleRatingScaleChange = (event) => {
    setRatingScale(event.target.value);
  };

  const handleBallotPreview = () => {
    let preview = '';
    if (ballotType === 'multipleChoice') {
      preview = (
        <>
          <h3>{question}</h3>
          <ul>
            {options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </>
      );
    } else if (ballotType === 'ratingScale') {
      preview = (
        <>
          <h3>{question}</h3>
          <div>
            {Array.from({ length: ratingScale }, (_, index) => (
              <span key={index}>{index + 1}</span>
            ))}
          </div>
        </>
      );
    } else if (ballotType === 'openEnded') {
      preview = (
        <>
          <h3>{question}</h3>
          <p>Open-ended question</p>
        </>
      );
    }
    setBallotPreview(preview);
  };

  const handleCreateBallot = () => {
    // Perform the necessary actions to create and save the ballot
    // You can send an API request or perform any other operation here
    // using the values of `ballotType`, `question`, `options`, and `ratingScale`
    console.log('Ballot created:', {
      type: ballotType,
      question,
      options,
      ratingScale,
    });

    // Reset form fields after creating the ballot
    setBallotType('multipleChoice');
    setQuestion('');
    setOptions(['', '']);
    setRatingScale(5);
    setBallotPreview('');
  };

  return (
    <div>
      <h1>Admin Page - Create Ballot</h1>
      <label>
        Ballot Type:
        <select value={ballotType} onChange={handleBallotTypeChange}>
          <option value="multipleChoice">Multiple Choice</option>
          <option value="ratingScale">Rating Scale</option>
          <option value="openEnded">Open-Ended</option>
        </select>
      </label>
      <br />
      <label>
        Question:
        <input
          type="text"
          value={question}
          onChange={handleQuestionChange}
        />
      </label>
      <br />
      {ballotType === 'multipleChoice' && (
        <>
          <label>Options:</label>
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={option}
                  onChange={(event) => handleOptionChange(index, event)}
                />
                {index > 1 && (
                  <button onClick={() => handleRemoveOption(index)}>
                    Remove
                  </button>
                )}
              </li>
            ))}
          </ul>
          <button onClick={handleAddOption}>Add Option</button>
        </>
      )}
      {ballotType === 'ratingScale' && (
        <>
          <label>
            Rating Scale:
            <input
              type="number"
              min="2"
              value={ratingScale}
              onChange={handleRatingScaleChange}
            />
          </label>
        </>
      )}
      <br />
      <button onClick={handleBallotPreview}>Preview Ballot</button>
      <br />
      <h2>Ballot Preview:</h2>
      {ballotPreview}
      <br />
      <button onClick={handleCreateBallot}>Create Ballot</button>
    </div>
  );
};

export default AdminPage;
