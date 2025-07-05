import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm"
import { Progress } from "./Progress"

@Entity({ name: "content" })
export class Content {
    @PrimaryColumn()
    id!: string

    @Column()
    title!: string

    @Column()
    description!: string

    @Column("text")
    content!: string

    @Column({ type: "varchar" })
    content_type!: 'article' | 'interactive' | 'video' | 'quiz'

    @Column({ type: "varchar" })
    difficulty_level!: 'beginner' | 'intermediate' | 'advanced'

    @Column("simple-array")
    age_group!: string[]

    @Column("simple-array")
    topics!: string[]

    @Column()
    author_id!: string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at!: string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at!: string

    @OneToMany(() => Progress, progress => progress.content)
    progressRecords!: Progress[]
} 