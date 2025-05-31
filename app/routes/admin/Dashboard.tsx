import Header from 'components/Header'

const Dashboard = () => {
  const user = {name: 'Adrian'}
  return (
    <main className='dashboard wrapper'>
      <Header 
        title={`Welcome ${user?.name ?? 'guest'}`}
        description="Track activity, trends and popular destination in real time"
      />
      Dashboard page Contents
    </main>
  )
}

export default Dashboard
