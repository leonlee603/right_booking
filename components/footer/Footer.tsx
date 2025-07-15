export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="border-t">
        <div className="container flex items-center py-8">
          &copy; {currentYear} Right Booking
        </div>
      </footer>
    );
}