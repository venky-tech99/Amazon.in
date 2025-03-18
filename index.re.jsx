const user = {
    name: 'venky',
    imageUrl: 'https://www.bing.com/th?id=OIP.eKE8nrMRCK3bdvd62kWJ_wHaEK&w=168&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }