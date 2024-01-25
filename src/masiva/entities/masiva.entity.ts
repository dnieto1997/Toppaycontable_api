// Importa los módulos necesarios de TypeORM
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('masiva')
export class Masiva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
  reference: string | null;

  @Column({ type: 'int', nullable: false })
  status: number;

  @Column({ type: 'int', nullable: false, default: '0' })
  usuario: number;

  @Column({ type: 'int', nullable: false, default: '1' })
  msg: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @Column({ type: 'decimal', precision: 14, scale: 2, nullable: false, default: '0.00' })
  cost: number;

  @Column({ type: 'decimal', precision: 14, scale: 2, nullable: false })
  iva: number;

  @Column({ type: 'text', nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
  motivo: string | null;

  @Column({ type: 'text', nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
  url_response: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true, collation: 'utf8mb4_unicode_ci' })
  currency: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true, collation: 'utf8mb4_unicode_ci' })
  amount: string | null;

  @Column({ type: 'tinyint', nullable: true, default: '0' })
  mov_update: number | null;

  @Column({ type: 'int', nullable: true })
  uid: number | null;

  @Column({ type: 'varchar', length: 255, nullable: false, default: '', charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
  provider: string;

  @Column({ type: 'varchar', length: 255, nullable: true, collation: 'utf8mb4_unicode_ci' })
  method: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true, collation: 'utf8mb4_unicode_ci' })
  merchant: string | null;
}
