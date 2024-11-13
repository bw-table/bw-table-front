import React, { useState } from 'react';
import CommonInput from '@/components/common/input/CommonInput';
import { FaTimes } from 'react-icons/fa';

interface HashtagInputProps {
  hashtags: string[];
  setHashtags: React.Dispatch<React.SetStateAction<string[]>>;
}

const HashtagInput: React.FC<HashtagInputProps> = ({ hashtags, setHashtags }) => {
  const [hashtagInput, setHashtagInput] = useState('');

  const addHashtag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && hashtagInput.trim() !== '') {
      e.preventDefault();

      const newTag = hashtagInput.trim();

      if (newTag && !hashtags.includes(newTag)) {
        setHashtags((prevHashtags) => [...prevHashtags, newTag]);
      }

      setHashtagInput('');
    }
  };

  const handleBlur = () => {
    const newTag = hashtagInput.trim();
    if (newTag && !hashtags.includes(newTag)) {
      setHashtags((prevHashtags) => [...prevHashtags, newTag]);
    }
    setHashtagInput('');
  };

  const removeHashtag = (index: number) => {
    setHashtags(hashtags.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-4 flex flex-col gap-3">
      <label htmlFor="hashtags" className="block text-sm font-medium">해시태그 등록</label>
      <div className="flex flex-wrap gap-2 mb-2">
        {hashtags.map((tag, index) => (
          <div key={index} className="flex items-center bg-gray-200 px-2 py-1 rounded-full">
            <span>{tag}</span>
            <button type="button" onClick={() => removeHashtag(index)} className="ml-1 text-mainColor-500">
              <FaTimes size={12} />
            </button>
          </div>
        ))}
      </div>
      <CommonInput
        type="text"
        id="hashtags"
        value={hashtagInput}
        onChange={(e) => setHashtagInput(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={addHashtag}
        placeholder="해시태그를 입력 후 Enter를 누르세요"
        classNames="w-full bg-gray-100 border-none"
      />
    </div>
  );
};

export default HashtagInput;
