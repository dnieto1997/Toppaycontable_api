import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('aliado')
export class Aliado {
    @PrimaryGeneratedColumn()
    uid: number;
  
    @Column({ type: 'varchar', length: 300, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
    token: string;
  
    @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
    image: string;
  
    @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
    merchant: string;
  
    @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
    email: string;
  
    @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
    phone: string;
  
    @Column({ type: 'tinytext', nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
    url_response: string;
  
    @Column({ type: 'decimal', precision: 14, scale: 2, nullable: false, default: '0.00' })
    pse_fijo: number;
  
    @Column({ type: 'decimal', precision: 14, scale: 2, nullable: false, default: '0.00' })
    pse_porcentaje: number;
  
    @Column({ type: 'decimal', precision: 14, scale: 2, nullable: false, default: '0.00' })
    nequi_fijo: number;
  
    @Column({ type: 'decimal', precision: 14, scale: 2, nullable: false, default: '0.00' })
    nequi_porcentaje: number;
  
    @Column({ type: 'decimal', precision: 14, scale: 2, nullable: false, default: '0.00' })
    cashout: number;
  
    @Column({ type: 'int', nullable: true, default: '0' })
    banco: number;
  
    @Column({ type: 'decimal', precision: 14, scale: 2, nullable: true, default: '0.00' })
    wallet_cashin: number;
  
    @Column({ type: 'decimal', precision: 14, scale: 2, nullable: true, default: '0.00' })
    wallet_cashout: number;
  
    @Column({ type: 'decimal', precision: 14, scale: 2, nullable: false, default: '0.19' })
    iva: number;
  
    @Column({ type: 'int', nullable: false, default: '1' })
    pais: number;
  
    @Column({ type: 'int', nullable: false })
    status: number;
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
  
    @Column({ type: 'timestamp', default: null, nullable: true })
    updated_at: Date;


}
