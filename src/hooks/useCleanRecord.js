import { useState, useEffect } from "react";

const useCleanRecord = (weatherRecord, location) => {
  const [cleanRecord, setCleanRecord] = useState([]);

  useEffect(() => {
    if (!weatherRecord.some((el) => el.id === location.id)) {
      setCleanRecord((weatherRecord) => weatherRecord.concat(location));
    }
  }, [location, weatherRecord]);

  return cleanRecord;
};

export default useCleanRecord;
