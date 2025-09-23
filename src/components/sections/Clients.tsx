"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import "@/styles/circuit.css"
import clients from '@/lib/clients'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Clients() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none circuit"></div>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      <div className="relative container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-cyan-600">
            مشتریان ما
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            داستان موفقیت برندهایی که به ما اعتماد کردند
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {clients.slice(0, 4).map((client) => (
            <motion.div
              key={client.id}
              variants={item}
              className="group relative rounded-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-br from-card/50 to-card border border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold">{client.name}</h3>
                  </div>
                  {client.logo && (
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-border/50">
                      <Image 
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                  {client.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center relative">
          <Link 
            href="/client" 
            className="relative z-20 inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow transition-colors hover:from-cyan-500 hover:to-cyan-400"
          >
            مشاهده همه مشتریان
          </Link>
        </div>
      </div>
    </section>
  );
}
