import { Copy } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/letmeAsk.svg';
import { Button } from './ui/button';

interface HeaderProps {
  roomId: string;
}

export function Header({ roomId }: HeaderProps) {
  const [isCopying, setIsCopying] = useState(false);

  function handleCopy() {
    setIsCopying(true);
    navigator.clipboard.writeText(roomId);
    setTimeout(() => {
      setIsCopying(false);
    }, 2000);
  }

  return (
    <header className="container mx-auto max-w-4xl border-border border-b px-4 py-8">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img alt="letmeask" className="w-28" src={logo} />
        </Link>

        <Button disabled={isCopying} onClick={handleCopy} variant="outline">
          <Copy className="mr-2 size-4" />
          Sala {roomId}
        </Button>
      </div>
    </header>
  );
}
