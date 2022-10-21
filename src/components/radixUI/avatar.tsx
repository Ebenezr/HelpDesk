import { styled } from "@stitches/react";
import { violet, blackA } from "@radix-ui/colors";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 45,
  height: 45,
  borderRadius: "10%",
  backgroundColor: blackA.blackA3,
});

const StyledAvatarLg = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 100,
  height: 100,
  borderRadius: "7%",
  backgroundColor: "#feebe4",
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#feebe4",
  color: "#0a95ff",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});
const StyledFallbackLg = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#c9e6f4",
  color: "#0a95ff",
  fontSize: 45,
  lineHeight: 1,
  fontWeight: 500,
});

// Exports
export const Avatar = StyledAvatar;
export const AvatarLg = StyledAvatarLg;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;
export const AvatarFallbackLg = StyledFallbackLg;
