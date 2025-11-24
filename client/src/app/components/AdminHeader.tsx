import Image from "next/image";

const AdminHeader = () => {
    return (
        <>
            <header className="flex h-16 items-center justify-end border-b border-border-light bg-card-light px-6 sticky top-0 z-10">
                {/* <div className="relative w-full max-w-sm">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-subtle-light">
                                    search
                                </span>
                                <input
                                    className="w-full rounded-lg border border-border-light bg-background-light py-2 pl-10 pr-4 text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder="Search..."
                                    type="text"
                                />
                            </div> */}
                <div className="flex items-center gap-4">
                    <button className="relative text-text-subtle-light hover:text-text-light">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white">
                            3
                        </span>
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="relative size-10 rounded-full overflow-hidden">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEAWEpJeAL59wxTpMJtqaVbh8ypTCiOsEzfgyLAXAjJrU_lGJVDuNjE5g2ImjDH2J7udZSTSULN78a4RxKyH5ZL89JywczzhcZi5RQk2FK-p8RKbQbu_qrEjoECcymgQrBbrQCDbwXt0dEPveYXTDvF_XG2g8uMdG2cfIoSdfG-o5GDTyJZhy2isgxCh7zB11dEQ3II-sHGbe9LbhTQOlkzI-cGDPhi93Qqzj3j25VxjMka2irG86khQ9j_ZjQPKRsK5V9GAL6U4dL"
                                alt="Catherine"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col text-sm">
                            <p className="font-medium text-text-light">Catherine</p>
                            <p className="text-text-subtle-light">Administrator</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default AdminHeader;
