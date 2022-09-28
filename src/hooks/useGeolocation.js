import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState({});
  const [error, setError] = useState(null);

  const onSuccess = ({ coords }) => {
    setLocation({
      lat: coords.latitude,
      lng: coords.longitude,
    });
  };
  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is no supported");
      return;
    }
    let watcher = geo.watchPosition(onSuccess, onError);

    return () => geo.clearWatch(watcher);
  }, []);
  return { ...location, error };
};

export default useGeolocation;
