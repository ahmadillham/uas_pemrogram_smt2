-- CreateTable
CREATE TABLE `portofolios` (
    `id_portofolio` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kegiatan` VARCHAR(100) NOT NULL,
    `waktu_kegiatan` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id_portofolio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
