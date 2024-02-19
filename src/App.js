import 'App.css';
import { useState, useEffect } from 'react';
import { supabase } from 'lib/supabaseClient';
import OtpAuth from 'components/authentication/OtpAuth'
import GitHubAuth from 'components/authentication/GitHubAuth'
import Profile from 'components/account/Profile'



export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);



  return (
    <div>
      {!session
        ? <div>
            <OtpAuth />
            <GitHubAuth />
          </div>
        : <Profile key={session.user.id} session={session} />}
    </div>
  )
}
