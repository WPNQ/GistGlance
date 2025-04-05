import React, { useState } from 'react';
import '../styles.css';

const GistGlance = () => {
  const [summary, setSummary] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedTab, setSelectedTab] = useState('highlight');
  const [inputText, setInputText] = useState('');

  const processSample = () => {
    if (!inputText && selectedTab === 'highlight') {
      setInputText(`Quarterly Report - Q1 2025
      
Revenue increased by 12% compared to the same period last year, reaching $24.3 million. This growth was primarily driven by our new product line launch in January and successful expansion into Asian markets.

Key Performance Indicators:
- New customer acquisition up 18%
- Customer retention rate at 92% (up from 88% last year)
- Average order value increased by 7.5%

Challenges faced during the quarter included ongoing supply chain disruptions in Southeast Asia and increasing raw material costs. Our operations team has implemented alternative sourcing strategies and we expect these issues to ease in Q2.

R&D investment increased by 15% as we continue to develop next-generation products for the healthcare and consumer electronics sectors. Two new patents were filed during this period.

Marketing expenditure was optimized with a shift toward digital channels, resulting in a 9% reduction in customer acquisition cost while maintaining growth targets.

For the next fiscal year, we project continued growth of 8-10% with improved profit margins as economies of scale begin to take effect in our new markets.`);
    }
    
    setIsProcessing(true);
    
    // Simulate API call with 2 second delay
    setTimeout(() => {
      if (inputText || selectedTab === 'upload') {
        setSummary("This quarterly report shows a 12% revenue increase driven by new product lines and expansion into Asian markets. Key challenges include supply chain disruptions and increasing raw material costs. The outlook remains positive with projected growth of 8-10% for the next fiscal year.");
      } else {
        setSummary("No text provided to summarize. Please highlight text, paste content, or upload a document.");
      }
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="app-title">
            <h1 className="title-text">GistGlance</h1>
            <span className="version-badge">Alpha 1.01</span>
          </div>
          <div className="header-buttons">
            <button className="settings-button">
              Settings
            </button>
            <button className="help-button">
              Help
            </button>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <div className="main-content">
        {/* Left panel */}
        <div className="left-panel">
          <div className="tab-bar">
            <button 
              className={`tab ${selectedTab === 'highlight' ? 'active' : ''}`}
              onClick={() => setSelectedTab('highlight')}
            >
              Highlight Text
            </button>
            <button 
              className={`tab ${selectedTab === 'upload' ? 'active' : ''}`}
              onClick={() => setSelectedTab('upload')}
            >
              Upload Document
            </button>
          </div>
          
          {selectedTab === 'highlight' ? (
            <div className="input-area">
              <p className="helper-text">Use keyboard shortcut (Ctrl+Shift+G) to capture highlighted text from any application</p>
              <textarea 
                className="text-input"
                placeholder="Or paste your text here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              ></textarea>
            </div>
          ) : (
            <div className="input-area">
              <div className="upload-area">
                <div className="upload-content">
                  <div style={{ marginBottom: "1rem" }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                    </svg>
                  </div>
                  <button className="upload-button">
                    Upload Document
                  </button>
                  <p className="upload-info">Supports PDF, DOCX, TXT, RTF, HTML</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="action-buttons">
            <button 
              className="primary-button"
              onClick={processSample}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Get Gist"}
            </button>
          </div>
        </div>
        
        {/* Right panel */}
        <div className="right-panel">
          <h2 className="panel-title">Summary</h2>
          
          {isProcessing ? (
            <div className="loader">
              <div className="text-center">
                <div className="spinner"></div>
                <p>Analyzing content...</p>
              </div>
            </div>
          ) : summary ? (
            <div className="summary-content">
              <div className="summary-box">
                <p>{summary}</p>
              </div>
              <div className="summary-actions">
                <button className="action-button">
                  Copy to Clipboard
                </button>
                <div>
                  <button className="action-button" style={{ marginRight: "0.5rem" }}>
                    More Detail
                  </button>
                  <button className="action-button">
                    Less Detail
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-state">
              <p>Summaries will appear here</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Status bar */}
      <div className="status-bar">
        <span>Ready</span>
        <div className="author-info">
          <span className="model-info">Claude 3.7 Sonnet</span>
          <span>By Will Payne</span>
        </div>
      </div>
    </div>
  );
};

export default GistGlance;
