import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header'
import ProfileCard from '@/components/ProfileCard'
import Footer from '@/components/Footer'

function Profile() {
  const title = "Profile";
  return (
    <div className="main-layout">
      <Header />
      <div className="content">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <ProfileCard />
      </div>
      <Footer />
    </div>
  )
}

export default Profile