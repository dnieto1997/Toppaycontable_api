import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import { hash } from 'bcrypt';

@Entity('login_dash')
export class LoginDash {
  @PrimaryGeneratedColumn()
  log_id: number;

  @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
  log_merchantid: string;

  @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
  log_usuario: string;

  @Column({ type: 'varchar', length: 100, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
  log_clave: string;

  @Column({ type: 'varchar', length: 4, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: 'MA' })
  log_tipo: string;

  @Column({ type: 'decimal', precision: 14, scale: 2, nullable: false, default: 0.00 })
  cashout: number;

  @Column({ type: 'int', nullable: false, default: 1 })
  log_pais: number;

  @Column({ type: 'char', length: 1, nullable: false, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', default: '1' })
  log_estado: string;



  @BeforeInsert()
    async hashPassword(){
        this.log_clave = await hash(this.log_clave, Number(process.env.HASH_SALT));
    }
}
