import React, { useEffect, useState } from "react";
import { inspirationApi } from "../api/InspirationApi";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";

export default function EditQuote() {
  const [quote, setQuote] = useState('');
  const [credit, setCredit] = useState('');
  const [creditor, setCreditor] = useState('');
  const [note, setNote] = useState('');
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    async function fetchQuote() {
      let inspiration = await inspirationApi.one(params.id);
      if (!ignore) {
        setQuote(inspiration.quote);
        setCredit(inspiration.credit);
        setCreditor(inspiration.creditor);
        setNote(inspiration.note);
      }
    }
    let ignore = false;
    fetchQuote();
    return () => {
      ignore = true;
    }
  }, [params]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (quote && credit && creditor) {
      let inspiration = await inspirationApi.put({id: params.id, quote, credit, creditor, note});
      history.push(`/quote/${inspiration.id}`);
    } else {
      console.log('invalid input');
    }
  };

  return (
    <div className="quoteForm">
      <h4>Add a new quote</h4>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="quote"
          onChange={(e) => setQuote(e.target.value)}
          value={quote}
          required
        />
        <input
          type="text"
          placeholder="credit"
          onChange={(e) => setCredit(e.target.value)}
          value={credit}
          required
        />
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setCreditor(e.target.value)}
          value={creditor}
          required
        />
        <input
          type="text"
          placeholder="note"
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
        <button type="submit">Save Quote</button>
      </form>
    </div>
  )
}