import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 text-center text-sm text-muted-foreground md:px-6">
        <p>&copy; {new Date().getFullYear()} SNK Overseas. All Rights Reserved.</p>
        <Link href="#" className="hover:text-primary">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
