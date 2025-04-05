import React, { useState } from 'react';

const GistGlance = () => {
  const [summary, setSummary] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedTab, setSelectedTab] = useState('highlight');

  const processSample = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setSummary("This quarterly report shows a 12% revenue increase driven by new product lines and expansion into Asian markets. Key challenges include supply chain disruptions and increasing raw material costs. The outlook remains positive with projected growth of 8-10% for the next fiscal year.");
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">GistGlance</h1>
            <span className="ml-2 text-xs bg-blue-500 px-2 py-1 rounded">Alpha 1.01</span>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm">
              Settings
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-sm">
              Help
            </button>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left panel */}
        <div className="w-1/2 p-4 flex flex-col border-r">
          <div className="flex border-b mb-4">
            <button 
              className={`px-4 py-2 ${selectedTab === 'highlight' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              onClick={() => setSelectedTab('highlight')}
            >
              Highlight Text
            </button>
            <button 
              className={`px-4 py-2 ${selectedTab === 'upload' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              onClick={() => setSelectedTab('upload')}
            >
              Upload Document
            </button>
          </div>
          
          {selectedTab === 'highlight' ? (
            <div className="flex-1 flex flex-col">
              <p className="text-sm text-gray-600 mb-2">Use keyboard shortcut (Ctrl+Shift+G) to capture highlighted text from any application</p>
              <textarea 
                className="flex-1 p-3 border rounded resize-none mb-4"
                placeholder="Or paste your text here..."
              ></textarea>
            </div>
          ) : (
            <div className="flex-1 flex flex-col">
              <div className="border-2 border-dashed border-gray-300 rounded-lg flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Upload Document
                  </button>
                  <p className="text-xs text-gray-500 mt-2">Supports PDF, DOCX, TXT, RTF, HTML</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex justify-end mt-4">
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={processSample}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Get Gist"}
            </button>
          </div>
        </div>
        
        {/* Right panel */}
        <div className="w-1/2 p-4 flex flex-col">
          <h2 className="text-lg font-medium mb-4">Summary</h2>
          
          {isProcessing ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                <p className="text-gray-600">Analyzing content...</p>
              </div>
            </div>
          ) : summary ? (
            <div className="flex-1 flex flex-col">
              <div className="bg-white border rounded p-4 flex-1">
                <p className="text-gray-800">{summary}</p>
              </div>
              <div className="mt-4 flex justify-between">
                <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm">
                  Copy to Clipboard
                </button>
                <div>
                  <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm mr-2">
                    More Detail
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm">
                    Less Detail
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              <p>Summaries will appear here</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Status bar */}
      <div className="bg-gray-200 p-2 text-xs text-gray-600 flex justify-between">
        <span>Ready</span>
        <div className="flex items-center">
          <span>Claude 3.7 Sonnet</span>
          <span className="ml-4">By Will Payne</span>
        </div>
      </div>
    </div>
  );
};

export default GistGlance;
