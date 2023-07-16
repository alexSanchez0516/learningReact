import './App.css'
import {CardFollow} from "./CardFollow.jsx";


// eslint-disable-next-line react/prop-types



function App() {

  const formatUsername = (username) => {
      return `@${username}`;
  }

  const users = [
      {id: 0,user: 'alexSanchez1', name: 'Alexander', isFollowing: true,img_url:'https://media.licdn.com/dms/image/D4D03AQFEd5APtzEzoQ/profile-displayphoto-shrink_200_200/0/1680105760025?e=1692835200&v=beta&t=O21K4bmZaq6fO9AXFDTChUcxLrf5ctInT5DDTiTvvJI'},
      {id: 1,user: 'alexSanchez2', name: 'Alexander', isFollowing: true,img_url:'https://media.licdn.com/dms/image/D4D03AQFEd5APtzEzoQ/profile-displayphoto-shrink_200_200/0/1680105760025?e=1692835200&v=beta&t=O21K4bmZaq6fO9AXFDTChUcxLrf5ctInT5DDTiTvvJI'},
      {id: 2,user: 'alexSanchez3', name: 'Alexander', isFollowing: true,img_url:'https://media.licdn.com/dms/image/D4D03AQFEd5APtzEzoQ/profile-displayphoto-shrink_200_200/0/1680105760025?e=1692835200&v=beta&t=O21K4bmZaq6fO9AXFDTChUcxLrf5ctInT5DDTiTvvJI'},
      {id: 3,user: 'alexSanchez4', name: 'Alexander', isFollowing: true,img_url:'https://media.licdn.com/dms/image/D4D03AQFEd5APtzEzoQ/profile-displayphoto-shrink_200_200/0/1680105760025?e=1692835200&v=beta&t=O21K4bmZaq6fO9AXFDTChUcxLrf5ctInT5DDTiTvvJI'},
      {id: 4,user: 'alexSanchez5', name: 'Alexander', isFollowing: true,img_url:'https://media.licdn.com/dms/image/D4D03AQFEd5APtzEzoQ/profile-displayphoto-shrink_200_200/0/1680105760025?e=1692835200&v=beta&t=O21K4bmZaq6fO9AXFDTChUcxLrf5ctInT5DDTiTvvJI'},
      {id: 5,user: 'alexSanchez6', name: 'Alexander', isFollowing: true,img_url:'https://media.licdn.com/dms/image/D4D03AQFEd5APtzEzoQ/profile-displayphoto-shrink_200_200/0/1680105760025?e=1692835200&v=beta&t=O21K4bmZaq6fO9AXFDTChUcxLrf5ctInT5DDTiTvvJI'},


  ];
  const propsInObject = {user: 'alexSanchez', name: 'Alexander', isFollowing: true};
  const propsInObject1 = {user: 'Juan012', name: 'Riveri', isFollowing: true};


  return (
          <>
              <CardFollow formatUserName={formatUsername} {...propsInObject}
                          img_url='https://media.licdn.com/dms/image/D4D03AQFEd5APtzEzoQ/profile-displayphoto-shrink_200_200/0/1680105760025?e=1692835200&v=beta&t=O21K4bmZaq6fO9AXFDTChUcxLrf5ctInT5DDTiTvvJI'

              />

              <CardFollow formatUserName={formatUsername} {...propsInObject1}
                          img_url='https://media.licdn.com/dms/image/D4D03AQFEd5APtzEzoQ/profile-displayphoto-shrink_200_200/0/1680105760025?e=1692835200&v=beta&t=O21K4bmZaq6fO9AXFDTChUcxLrf5ctInT5DDTiTvvJI'

              />

              <CardFollow formatUserName={formatUsername} user='Messi' name='Lionel' isFollowing={true}
                          img_url='https://media.licdn.com/dms/image/D4D03AQFEd5APtzEzoQ/profile-displayphoto-shrink_200_200/0/1680105760025?e=1692835200&v=beta&t=O21K4bmZaq6fO9AXFDTChUcxLrf5ctInT5DDTiTvvJI'

              />


              <div style={{backgroundColor: 'blue'}}>
                  {
                      users.map(userSelected => {
                          const {id, user, name, isFollowing,  img_url} = userSelected;
                          return (
                            <CardFollow key={id} formatUserName={formatUsername} user={user} name={name} img_url={img_url} isFollowing={isFollowing}/>
                          );
                      })
                  }
              </div>
          </>
  )
}

export default App
