import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('Type markdown here');

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea value={markdown} onChange={handleMarkdownChange} />

      <div>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default function reverseSentence(sentence) {
	// Reverse the sentence
	const reversed = sentence.split(' ').reverse().join(' ');

	// Capitalize the first letter
	const capitalized = reversed.charAt(0).toUpperCase() + reversed.slice(1);

	return capitalized;
}

const inputSentence = 'hello world';
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence); // Output: World hello
