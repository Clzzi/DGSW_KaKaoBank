import PageTemplate from 'components/Common/Base/PageTemplate';
import Profile from 'components/Profile';

const ProfilePage = (): JSX.Element => {
  return (
    <PageTemplate isHeader isFooter isLogout>
      <Profile />
    </PageTemplate>
  );
};

export default ProfilePage;