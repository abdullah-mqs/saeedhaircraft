import { NextResponse } from "next/server";
import { connection } from "next/server";
import { sql } from "@/lib/db";
import { r2Client } from "@/lib/r2";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";

export async function GET() {
  // Opt out of prerendering for cacheComponents compatibility
  await connection();

  try {
    // 1. Test Neon Database Connection
    const dbResult =
      await sql`SELECT NOW() as current_time, version() as version;`;

    // 2. Test Cloudflare R2 Bucket Connection
    const bucketName = process.env.R2_BUCKET_NAME || "saeedhaircraft";
    const r2Result = await r2Client.send(
      new ListObjectsV2Command({
        Bucket: bucketName,
        MaxKeys: 1,
      }),
    );

    return NextResponse.json({
      success: true,
      message: "Neon DB & Cloudflare R2 are connected successfully!",
      database: {
        time: dbResult[0].current_time,
        version: dbResult[0].version,
      },
      r2Storage: {
        bucket: bucketName,
        objectsFound: r2Result.Contents?.length || 0,
      },
    });
  } catch (error: any) {
    console.error("Connection Test Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to connect to services",
      },
      { status: 500 },
    );
  }
}
