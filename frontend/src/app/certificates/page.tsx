"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCertificates, Certificate } from "@/data/mockData";
import SkeletonCard from "@/components/SkeletonCard";

export default function CertificatePage() {
  const [certificatesList, setCertificatesList] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        setLoading(true);
        const data = await getCertificates();
        setCertificatesList(data);
      } catch (error) {
        console.error("Failed to fetch certificates:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCertificates();
  }, []);

  return (
    <section className="py-16 sm:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Certificates
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Sertifikasi keahlian dan pencapaian akademik yang saya raih selama menempuh pendidikan di bidang Informatika.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 3 }).map((_, idx) => (
                <SkeletonCard key={idx} variant="certificate" />
              ))
            : certificatesList.map((cert) => (
                <div
                  key={`certificate-${cert.id}-${cert.title}`}
                  className="group rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Foto Sertifikat */}
                  <div className="relative w-full h-48 overflow-hidden bg-gray-800 flex items-center justify-center">
                    {cert.imageUrl ? (
                      <Image
                        src={cert.imageUrl}
                        alt={cert.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-5xl opacity-20"></span>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors duration-300">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-indigo-300 text-sm font-semibold mb-4">
                      {cert.issuer}
                    </p>

                    <div className="space-y-1.5 text-xs text-gray-500">
                      <div>
                        <span className="font-medium text-gray-400">Diterbitkan: </span>
                        {cert.date}
                      </div>
                      <div>
                        <span className="font-medium text-gray-400">ID Kredensial: </span>
                        {cert.credentialId}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-gray-800/50">
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
                      >
                        Lihat Kredensial <span className="text-xs">↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}