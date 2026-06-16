import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Falta STRIPE_SECRET_KEY" },
      { status: 500 }
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const formData = await request.formData();
  const nombre = formData.get("nombre")?.toString().trim();

  if (!nombre) {
    return NextResponse.json(
      { error: "Debes seleccionar un nombre" },
      { status: 400 }
    );
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    metadata: {
      nombre,
      concepto: "Viaje de la masonada",
    },
    payment_intent_data: {
      metadata: {
        nombre,
        concepto: "Viaje de la masonada",
      },
    },
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: `Viaje de la masonada - ${nombre}`,
          },
          unit_amount: 16500,
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
  });

  return NextResponse.redirect(session.url!, 303);
}