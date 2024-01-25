import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movimientos')
export class Movimiento {
    @PrimaryGeneratedColumn()
    uid: number;

    @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '' })
    reference: string;
  
    @Column({ type: 'int', nullable: false, default: '0' })
    reference_pro: number;
  
    @Column({ type: 'varchar', length: 100, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '0' })
    reference_pro2: string;
  
    @Column({ type: 'text', nullable: true, collation: 'utf8mb4_unicode_ci' })
    checkout: string;
  
    @Column({ type: 'int', nullable: false, default: '0' })
    merchant_id: number;
  
    @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '' })
    merchant_email: string;
  
    @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '' })
    merchant_phone: string;
  
    @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '' })
    merchant_logo: string;
  
    @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '' })
    merchant_name: string;
  
    @Column({ type: 'date', nullable: false })
    expiration: Date;
  
    @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '' })
    currency: string;
  
    @Column({ type: 'varchar', length: 20, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '' })
    amount: string;
  
    @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '' })
    user_doc: string;
  
    @Column({ type: 'varchar', length: 20, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '' })
    user_type: string;
  
    @Column({ type: 'text', nullable: false, collation: 'utf8mb4_unicode_ci' })
    user_name: string;
  
    @Column({ type: 'varchar', length: 50, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '' })
    user_phone: string;
  
    @Column({ type: 'varchar', length: 80, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '' })
    user_email: string;
  
    @Column({ type: 'varchar', length: 80, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '' })
    user_address: string;
  
    @Column({ type: 'varchar', length: 80, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: null })
    user_typeuser: string | null;
  
    @Column({ type: 'char', length: 1, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '1' })
    type_transaction: string;
  
    @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: 'TUP_GEN' })
    method: string;
  
    @Column({ type: 'decimal', precision: 14, scale: 2, nullable: false, default: '0.00' })
    cost: number;
  
    @Column({ type: 'decimal', precision: 14, scale: 2, nullable: false, default: '0.00' })
    iva: number;
  
    @Column({ type: 'varchar', length: 80, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '' })
    user_bank: string;
  
    @Column({ type: 'varchar', length: 80, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: null })
    user_type_account: string | null;
  
    @Column({ type: 'varchar', length: 80, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: null })
    user_num_account: string | null;
  
    @Column({ type: 'int', nullable: false, default: '0' })
    status: number;
  
    @Column({ type: 'text', nullable: true, collation: 'utf8mb4_unicode_ci' })
    linkpro: string;
  
    @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: 'P' })
    notify: string;
  
    @Column({ type: 'char', length: 1, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '0' })
    pagado: string | null;
  
    @Column({ type: 'varchar', length: 60, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: null })
    inscrita: string | null;
  
    @Column({ type: 'datetime', default: null })
    created_at: Date;
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;

}
