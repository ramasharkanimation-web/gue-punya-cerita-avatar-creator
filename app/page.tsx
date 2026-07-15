import Header from "@/components/Header";
import AvatarMaker from "@/components/AvatarMaker";

export default function Home() {
  return (
    <>
      <Header />
      <AvatarMaker />
      <footer className="text-center px-6 py-6 text-xs text-[#5a5670]">
        Dibuat buat komunitas <strong>Gue Punya Cerita</strong>
      </footer>
    </>
  );
}
