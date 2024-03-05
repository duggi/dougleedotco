import { useState } from 'react';
import { supabase } from 'lib/supabaseClient';



export default function GitHubAuth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) {
      alert(error.error_description || error.message);
    }

    setLoading(false);
  }



  return (
    <div>
      <p>Sign in with GitHub</p>
      <button onClick={handleLogin} disabled={loading}>
        Login with GitHub
      </button>
    </div>
  )
}
