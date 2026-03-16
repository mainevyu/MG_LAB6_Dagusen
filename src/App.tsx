import { useState, useRef } from "react";
import "./App.css";

interface FeedbackData {
  studentName: string;
  studentID: string;
  bookTitle: string;
  author: string;
  reasonForRequest: string;
}

function App() {
    // Controlled Form State
    const [studentName, setStudentName] = useState<string>("");
    const [studentID, setStudentID] = useState<string>("");
    const [bookTitle, setBookTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [reasonForRequest, setReasonForRequest] = useState<string>("");
    const [submittedData, setSubmittedData] = useState<FeedbackData | null>(null);

    // Uncontrolled Form Refs
    const studentNameRef = useRef<HTMLInputElement>(null);
    const studentIDRef = useRef<HTMLInputElement>(null);
    const bookTitleRef = useRef<HTMLTextAreaElement>(null);
    const authorRef = useRef<HTMLTextAreaElement>(null);
    const reasonForRequestRef = useRef<HTMLTextAreaElement>(null);

    // Controlled Submit
    const handleControlledSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: FeedbackData = {
    studentName,
    studentID,
    bookTitle,
    author,
    reasonForRequest
  };

    setSubmittedData(data);
    setStudentName("");
    setStudentID("");
    setBookTitle("");
    setAuthor("");
    setReasonForRequest("");
  };

  // Uncontrolled Submit
  const handleUncontrolledSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    if (studentNameRef.current && studentIDRef.current && bookTitleRef.current && authorRef.current && reasonForRequestRef.current ) {
    const data: FeedbackData = {
    studentName: studentNameRef.current.value,
    studentID: studentIDRef.current.value,
    bookTitle: bookTitleRef.current.value,
    author: authorRef.current.value,
    reasonForRequest: reasonForRequestRef.current.value,
  };

      console.log("Uncontrolled Form Data:", data);
      alert("Check the console for submitted data.");
    }
  };

  return (
  <div className="form">
    <h1><strong>Book Request Form</strong></h1>
    
    {/* Controlled Form */}
    <h2>Controlled Form</h2>
    <form onSubmit={handleControlledSubmit}>

    <div>
    <label>Student Name:</label><br/>
    <input
      type="text"
      value={studentName}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      setStudentName(e.target.value)
    }/>
    </div>

    <br/>
    <div>
      <label>Student ID:</label><br/>
      <input
      type="text"
      value={studentID}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      setStudentID(e.target.value)
    }/>
    </div>
    
    <br/>
      <div>
      <label>Book Title:</label><br/>
      <textarea
      value={bookTitle}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setBookTitle(e.target.value)
    }/>
    </div>
    
    <br/>
      <div>
      <label>Author:</label><br/>
      <textarea
      value={author}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setAuthor(e.target.value)
    }/>
    </div>
    
    <br/>
      <div>
      <label>Reason for Request:</label><br/>
      <textarea
      value={reasonForRequest}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setReasonForRequest(e.target.value)
      }/>
    </div>

    <br/>
      <button type="submit">
      Submit Controlled Form
    </button>
    </form>

    {/* Display Controlled Data */}
    {submittedData && (
      <div style={{ marginTop: "20px" }}>
      <h3>Submitted Feedback</h3>
      <p><strong>Student Name:</strong> {submittedData.studentName}</p>
      <p><strong>Student ID:</strong> {submittedData.studentID}</p>
      <p><strong>Book Title:</strong> {submittedData.bookTitle}</p>
      <p><strong>Author:</strong> {submittedData.author}</p>
      <p><strong>Reason for Request:</strong> {submittedData.reasonForRequest}</p>
      </div>
    )}

    <hr className="form"/>

    {/* Uncontrolled Form */}
    <h2>Uncontrolled Form</h2>
    <form onSubmit={handleUncontrolledSubmit}>

    <div>
      <label>Student Name:</label><br/>
      <input type="text" ref={studentNameRef}/>
    </div>
    <br/>

    <div>
      <label>Student ID:</label><br/>
      <input type="text" ref={studentIDRef}/>
    </div>
    <br/>

    <div>
      <label>Book Title:</label><br/>
      <textarea ref={bookTitleRef}/>
    </div>
    <br/>

    <div>
      <label>Author:</label><br/>
      <textarea ref={authorRef}/>
    </div>
    <br/>

    <div>
      <label>Reason for Request:</label><br/>
      <textarea ref={reasonForRequestRef}/>
    </div>
    
    <button type="submit">
      Submit Uncontrolled
    </button>
    </form>
    </div>
  );
}

export default App;