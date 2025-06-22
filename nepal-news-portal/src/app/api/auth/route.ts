import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function POST(req) {
    const { action, email, password } = await req.json();

    if (action === 'register') {
        const hashedPassword = await hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });
        return NextResponse.json({ user }, { status: 201 });
    }

    if (action === 'login') {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !(await compare(password, user.password))) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
        return NextResponse.json({ token, user });
    }

    return NextResponse.json({ message: 'Invalid action' }, { status: 400 });
}