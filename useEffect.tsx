import React, { useEffect, useState } from 'react';

// Define or import your components
const ClientSideComponent = () => <div>Client Side</div>;
const LoadingComponent = () => <div>Loading...</div>;

const MyComponent: React.FC = () => {
  const [clientSide, setClientSide] = useState(false);

  useEffect(() => {
    setClientSide(true);
  }, []);

  return (
    <div>
      {clientSide ? <ClientSideComponent /> : <LoadingComponent />}
    </div>
  );
};

export default MyComponent;