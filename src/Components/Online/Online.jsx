import useOnline from '../../hooks/useOnline';

export default function Online({ children }) {
  let isOnline = useOnline();
  if (isOnline) {
    return children;
  }
}
