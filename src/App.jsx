import { onAuthStateChanged } from 'firebase/auth'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import List from './components/list/List'
import Login from './components/login/Login'
const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, user => {
      fetchUserInfo(user?.uid)
    })

    return () => {
      unSub()
    }
  }, [fetchUserInfo])

  if (isLoading) return <div className="loading">Loading...</div>;
  return (
    <div className='container'>
      {currentUser ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
