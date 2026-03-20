def calculate_risk(rain, temperature, aqi):
    risk = 0

    if rain > 50:
        risk += 1

    if temperature > 40:
        risk += 1

    if aqi > 300:
        risk += 1

    premium = 30 + risk * 10
    return premium


# Example run
print("Premium:", calculate_risk(60, 42, 350))