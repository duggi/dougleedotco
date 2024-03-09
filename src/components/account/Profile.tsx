import { useState, useEffect } from 'react';
import { supabase } from 'lib/supabaseClient';
import Avatar from 'components/account/Avatar';



export default function Profile({ session }) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function getProfile() {
      setLoading(true);
      const { user } = session;
      const { data, error } = await supabase
        .from('profiles')
        .select(`username, full_name, website, avatar_url`)
        .eq('id', user.id)
        .single();

      if (!ignore) {
        if (error) {
          console.warn(error);
        } else if (data) {
          setUsername(data.username);
          setFullName(data.full_name);
          setWebsite(data.website);
          setAvatarUrl(data.avatar_url);
        }
      }
      setLoading(false);
    }
    getProfile();

    return () => {
      ignore = true;
    }
  }, [session]);

  async function updateProfile(event, url) {
    console.log(event, url);
    event.preventDefault();
    setLoading(true);
    const { user } = session;
    const updates = {
      id: user.id,
      username,
      full_name: fullName,
      website,
      avatar_url: url,
      updated_at: new Date(),
    }

    console.log('UPDATES', updates);

    const { error } = await supabase
      .from('profiles')
      .upsert(updates);

    if (error) {
      alert(error.message);
    } else {
      setAvatarUrl(url);
    }
    setLoading(false);
  }



  return (
    <div>
      <form onSubmit={updateProfile}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={session.user.email}
            disabled
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            required
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="full-name">Full Name</label>
          <input
            id="full-name"
            type="text"
            required
            value={fullName || ''}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="url"
            value={website || ''}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Loading ...' : 'Update'}
          </button>
        </div>

        <div>
          <button type="button" onClick={() => supabase.auth.signOut()}>
            Sign Out
          </button>
        </div>
      </form>

      <hr />

      <Avatar
        url={avatarUrl}
        size={150}
        onUpload={(event, url) => {
          updateProfile(event, url);
        }}
      />
    </div>
  )
}
