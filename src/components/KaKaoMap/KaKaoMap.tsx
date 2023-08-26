import { Map, MapMarker } from "react-kakao-maps-sdk";
import React, { useEffect, useState } from "react";
import { notification } from "antd";
import { BR } from "@/theme";
import { nanoid } from "@reduxjs/toolkit";

interface KaKaoMapProps {
  address: string;
}

const KaKaoMap: React.FC<KaKaoMapProps> = ({ address }) => {
  const [info, setInfo] = useState<any>();
  const [marker, setMarker] = useState<any>();
  const [map, setMap] = useState<any>();

  useEffect(() => {
    if (!map || !address) {
      return;
    }

    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, (result, status) => {
      if (status !== kakao.maps.services.Status.OK) {
        notification.error({
          message: <BR>{`검색 결과가 없습니다.`}</BR>,
          placement: "bottomRight",
        });

        return;
      }

      // @ts-ignore
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      const bounds = new kakao.maps.LatLngBounds();

      // @ts-ignore
      bounds.extend(new kakao.maps.LatLng(result[0].y, result[0].x));

      // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      const newMarker = {
        position: {
          lat: result[0].y,
          lng: result[0].x,
        },
        content: "목적지",
      };

      setMarker(newMarker);
      map.setCenter(coords);
      map.setBounds(bounds);
    });
  }, [map, address]);

  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "100%" }}
      level={3}
      onCreate={setMap}
    >
      {marker && (
        <MapMarker
          key={nanoid()}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info && info.content === marker.content && (
            <div
              style={{
                width: "150px",
                textAlign: "center",
                padding: "6px 0",
              }}
            >
              {marker.content}
            </div>
          )}
        </MapMarker>
      )}
    </Map>
  );
};

export default KaKaoMap;
