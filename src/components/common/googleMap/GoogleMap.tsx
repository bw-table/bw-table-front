'use client';

import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    google: any; // google 객체 선언
  }
}

interface GoogleMapsProps {
  address: string; // 표시할 주소
  height?: string; // 지도 높이
  zoomLevel?: number; // 줌 레벨
}

const GoogleMaps: React.FC<GoogleMapsProps> = ({ address, height = '200px', zoomLevel = 15 }) => {
  const mapRef = useRef<HTMLDivElement | null>(null); // 지도를 표시할 div
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    if (!apiKey) {
      setError('Google Maps API 키가 설정되지 않았습니다.');
      return;
    }

    const loadGoogleMapsScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject('Google Maps API 스크립트를 로드할 수 없습니다.');
        document.head.appendChild(script);
      });
    };

    const geocodeAddress = async () => {
      try {
        await loadGoogleMapsScript();

        const geocoder = new google.maps.Geocoder();

        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK' && results[0]?.geometry.location) {
            const map = new google.maps.Map(mapRef.current as HTMLElement, {
              center: results[0].geometry.location,
              zoom: zoomLevel,
            });

            new google.maps.Marker({
              map,
              position: results[0].geometry.location,
            });
          } else {
            setError('주소를 변환할 수 없습니다.');
          }
        });
      } catch (err) {
        setError(`Google Maps 로드 실패: ${err}`);
      }
    };

    geocodeAddress();
  }, [address, zoomLevel]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return <div ref={mapRef} style={{ width: '100%', height }} />;
};

export default GoogleMaps;
