import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";


export default function Navbar() {
  const [input, setInput] = useState("");
  const debounced = useDebounce(input, 500);
  const navigate = useNavigate();

  
  useEffect(() => {
    if (debounced.trim()) {
      navigate(`/search?query=${encodeURIComponent(debounced.trim())}`);
    }
  }, [debounced]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) {
      navigate(`/search?query=${encodeURIComponent(input.trim())}`);
    }
  }

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </nav>
  );
}


