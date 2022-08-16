import styled from 'styled-components';
import {ReactComponent as ReactSVG} from './../react-svg.svg';

const StyledContainer = styled.div`
  width: 100vw;
  padding: 20px;
  background: green;
  background: linear-gradient(to left, red, blue);
  color: yellow;
  font-size: 30px;
`;

const Location = () => {
  //https://love2dev.com/blog/html-geolocation/
  if ("geolocation" in navigator) { 
    console.log("geolocation allowed");
  } else { 
    console.log("geolocation not allowed");
  }
  /*
  if ( navigator.geolocation ) { 
    navigator.geolocation.getCurrentPosition( setCurrentPosition, positionError, { 
      enableHighAccuracy: false, 
      timeout: 15000, 
      maximumAge: 0 
    } );
  } */
  function positionError( error ) { 
    switch ( error.code ) { 
      case error.PERMISSION_DENIED: 
        console.error( "User denied the request for Geolocation." ); 
        break; 
      case error.POSITION_UNAVAILABLE: 
        console.error( "Location information is unavailable." ); 
        break; 
      case error.TIMEOUT: 
        console.error( "The request to get user location timed out." ); 
        break; 
      case error.UNKNOWN_ERROR: 
        console.error( "An unknown error occurred." ); 
        break; 
    }
  }  

  function setCurrentPosition( position ) { 
    document.querySelector( '.accuracy' ).innerHTML = position.coords.accuracy; 
    document.querySelector( '.altitude' ).innerHTML = position.coords.altitude; 
    document.querySelector( '.altitudeAccuracy' ).innerHTML = position.coords.altitudeAccuracy; 
    document.querySelector( '.heading' ).innerHTML = position.coords.heading; 
    document.querySelector( '.latitude' ).innerHTML = position.coords.latitude; 
    document.querySelector( '.longitude' ).innerHTML = position.coords.longitude; 
    document.querySelector( '.speed' ).innerHTML = position.coords.speed;
  }
  let geoWatch;
  function startWatch() { 
    if ( !geoWatch ) { 
      if ( "geolocation" in navigator && "watchPosition" in navigator.geolocation ) { 
        geoWatch = navigator.geolocation.watchPosition( setCurrentPosition, positionError, { 
          enableHighAccuracy: false, timeout: 15000, maximumAge: 0 
        } ); 
      } 
    }
  }
  startWatch();
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  return (
    <div className="App">
        <StyledContainer>
            <h1>Location</h1>
            <ReactSVG width="180px" height="180px"/>
            <p>
                Accuracy: <span className="accuracy"></span><br/>
                Altitude: <span className="altitude"></span><br/>
                Altitude Accuracy: <span className="altitudeAccuracy"></span><br/>
                Heading: <span className="heading"></span><br/>
                Latitude: <span className="latitude"></span><br/>
                Longitude: <span className="longitude"></span><br/>
                Speed: <span className="speed"></span>
            </p>
        </StyledContainer>
    </div>
  );
};

export default Location;
